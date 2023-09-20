import React, { useState, useEffect } from "react";
import {
  setCurrentUser,
  $userStorage,
} from '../stores/users.ts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AccountSelect(properties) {
  const [chain, setChain] = useState();
  const [mode, setMode] = useState();
  const [accountInput, setAccountInput] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [searchResponse, setSearchResponse] = useState();

  async function lookupAccount() {
    const response = await fetch(`http://localhost:8080/api/accountLookup/${chain}/${accountInput}`, { method: "GET" });

    if (!response.ok) {
        console.log({
            error: new Error(`${response.status} ${response.statusText}`),
            msg: "Couldn't generate deeplink."
        });
        return;
    }

    const responseContents = await response.json();

    if (responseContents && responseContents.result) {
      const finalResult = responseContents.result;
      setSearchResponse(finalResult);
      return;
    }

    setErrorMessage("Couldn't find account.");
  }

  useEffect(() => {
    if (searchResponse) {
      const id = searchResponse.id;
      const name = searchResponse.name;
      const referrer = searchResponse.referrer;
      try {
        setCurrentUser(name, id, referrer, chain)
      } catch (error) {
        console.log(error);
      }
    }
  }, [searchResponse]);

  const [users, setUsers] = useState();
  useEffect(() => {
    const unsubscribe = $userStorage.subscribe((value) => {
      setUsers(value.users);
    });
    return unsubscribe;
  }, [$userStorage]);

  return (
    <>
      <div className="container mx-auto mt-5 mb-5">
        <div className="grid grid-cols-1">
          {
            !chain
              ? <Card>
                  <CardHeader>
                    <CardTitle>⚙️ Select a blockchain to continue</CardTitle>
                    <CardDescription>Which blockchain do you want to use?</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="mr-2" onClick={() => setChain("bitshares")}>
                      Bitshares (BTS)
                    </Button>
                    <Button onClick={() => setChain("bitshares_testnet")}>
                      Bitshares testnet (TEST)
                    </Button>
                  </CardContent>
                </Card>
              : null
          }
          {
            chain && !mode
              ? <Card>
                  <CardHeader>
                    <CardTitle>Use a new or existing {chain === "bitshares" ? "Bitshares" : "Bitshares testnet"} account?</CardTitle>
                    <CardDescription>How do you want to proceed?</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="mr-2" onClick={() => setMode("new")}>
                      New account
                    </Button>
                    <Button onClick={() => setMode("existing")}>
                      Existing account
                    </Button>
                    <br />
                    <Button className="mt-2" onClick={() => setChain(null)}>
                      Back
                    </Button>
                  </CardContent>
                </Card>
              : null
          }
          {
            chain && mode && mode === "new" && !searchResponse
              ? <Card>
                  <CardHeader>
                    <CardTitle>
                      {
                        chain === "bitshares"
                          ? "🔐 Bitshares (BTS)"
                          : "🔐 Bitshares testnet (TEST)"
                      }
                    </CardTitle>
                    <CardDescription>Enter your Bitshares account name</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Input
                        value={accountInput || ""}
                        placeholder="Account name or ID"
                        onKeyDown={(event) => {
                          if (event.key === "Enter") {
                            lookupAccount()
                          }
                        }}
                        onChange={(event) => {
                          const regex = /^[a-zA-Z0-9.-]*$/;
                          if (regex.test(event.target.value)) {
                            setAccountInput(event.target.value);
                            setErrorMessage();
                            setSearchResponse();
                          }
                        }}
                    />
                    {
                      errorMessage
                        ? <p className="text-red-500 text-xs italic">{errorMessage || "ERROR"}</p>
                        : null
                    }
                  </CardContent>
                  <CardFooter>
                    <Button className="mr-2" onClick={() => setMode(null)}>
                      Back
                    </Button>
                    {
                      accountInput
                        ? <Button onClick={() => lookupAccount()}>
                            Continue
                          </Button>
                        : <Button disabled>
                            Continue
                          </Button>
                    }
                  </CardFooter>
                </Card>
              : null
          }
          {
            mode && mode === "existing" && users.length
              ? <Card>
                  <CardHeader>
                    <CardTitle>
                      {
                        chain === "bitshares"
                          ? "🔐 Bitshares (BTS)"
                          : "🔐 Bitshares testnet (TEST)"
                      }
                    </CardTitle>
                    <CardDescription>Select your previously used account</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {
                      users.filter((user) => user.chain === chain).length
                        ? users
                          .filter((user) => user.chain === chain)
                          .map((user) => {
                            return (
                              <Button
                                key={user.id}
                                id={user.id}
                                className="mr-2"
                                onClick={() => {
                                  setCurrentUser(user.username, user.id, user.referrer, user.chain);
                                }}
                              >
                                {user.username}
                              </Button>
                            )
                          })
                        : <p className="text-red-500 text-xs italic">No accounts found.</p>
                    }
                  </CardContent>
                  <CardFooter>
                    <Button className="mr-2" onClick={() => setMode(null)}>
                      Back
                    </Button>
                  </CardFooter>
                </Card>
              : null
          }
        </div>
      </div>
    </>
  );
}
