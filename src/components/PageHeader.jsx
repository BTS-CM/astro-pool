import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { i18n as i18nInstance, locale } from "@/lib/i18n.js";

import { GearIcon, HamburgerMenuIcon, ReloadIcon } from "@radix-ui/react-icons";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import { Button } from "@/components/ui/button";

function MenuRow(properties) {
  const { url, text, icon } = properties;

  const [hover, setHover] = useState(false);
  const [isCurrentPage, setIsCurrentPage] = useState(false);

  useEffect(() => {
    setIsCurrentPage(window.location.pathname === url);
  }, [url]);

  const [clicked, setClicked] = useState(false);

  return (
    <a
      href={url}
      onClick={() => {
        setClicked(true);
      }}
    >
      <CommandItem
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        style={{
          backgroundColor: hover || isCurrentPage ? "#F1F1F1" : "",
        }}
      >
        <span className="grid grid-cols-8 w-full">
          <span className="col-span-1">{icon}</span>
          <span className="col-span-6">{text}</span>
          <span className="col-span-1 text-right">
            {clicked && !isCurrentPage ? <ReloadIcon className="ml-2 mt-1 animate-spin" /> : ""}
          </span>
        </span>
      </CommandItem>
    </a>
  );
}

function LanguageRow(properties) {
  const { language, text, i18n } = properties;

  const [hover, setHover] = useState(false);
  const [isCurrentLanguage, setIsCurrentLanguage] = useState(false);

  useEffect(() => {
    setIsCurrentLanguage(language === locale.get());
  }, [language]);

  return (
    <CommandItem
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onSelect={() => {
        i18n.changeLanguage(language);
        locale.set(language);
        window.location.reload();
      }}
      style={{
        backgroundColor: hover || isCurrentLanguage ? "#F1F1F1" : "",
      }}
    >
      <span className="grid grid-cols-8 w-full">
        <span className="col-span-6">{text}</span>
        <span className="col-span-1 text-right">{isCurrentLanguage ? "✓" : ""}</span>
      </span>
    </CommandItem>
  );
}

export default function PageHeader(properties) {
  const { t, i18n } = useTranslation(locale.get(), { i18n: i18nInstance });

  return (
    <>
      <div key={`${locale.get()}_header`} className="container mx-auto mb-3">
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>
                  <HamburgerMenuIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-10 p-0" side="end">
                <Command className="rounded-lg border shadow-md">
                  <CommandInput placeholder={t("PageHeader:commandSearchPlaceholder")} />
                  <CommandList>
                    <CommandEmpty>{t("PageHeader:noResultsFound")}</CommandEmpty>
                    <CommandGroup heading={t("PageHeader:exchangingFundsHeading")}>
                      <MenuRow
                        url="/dex/index.html"
                        text={t("PageHeader:dexLimitOrders")}
                        icon="📈"
                      />
                      <MenuRow
                        url="/pool/index.html"
                        text={t("PageHeader:poolExchange")}
                        icon="💱"
                      />
                      <MenuRow
                        url="/transfer/index.html"
                        text={t("PageHeader:transferAssets")}
                        icon="💸"
                      />
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading={t("PageHeader:formsOfDebtHeading")}>
                      <MenuRow
                        url="/borrow/index.html"
                        text={t("PageHeader:borrowFunds")}
                        icon="🏦"
                      />
                      <MenuRow
                        url="/smartcoins/index.html"
                        text={t("PageHeader:createDebt")}
                        icon="💵"
                      />
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading={t("PageHeader:overviewsHeading")}>
                      <MenuRow
                        url="/portfolio/index.html"
                        text={t("PageHeader:portfolio")}
                        icon="💰"
                      />
                      <MenuRow
                        url="/featured/index.html"
                        text={t("PageHeader:topMarkets")}
                        icon="🏆"
                      />
                      <MenuRow
                        url="/deals/index.html"
                        text={t("PageHeader:creditDeals")}
                        icon="🤝"
                      />
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading={t("PageHeader:settingsHeading")}>
                      <MenuRow url="/ltm/index.html" text={t("PageHeader:buyLTM")} icon="🏅" />
                    </CommandGroup>
                  </CommandList>
                </Command>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="col-span-6">
            <h2>
              {t("PageHeader:welcomeMessage")}
              <span
                style={{
                  backgroundImage: "var(--accent-gradient)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundSize: "400%",
                  backgroundPosition: "0%",
                }}
              >
                {t("PageHeader:uiName")}
              </span>
            </h2>
          </div>
          <div className="col-span-3 text-right">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>
                  <GearIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-10 p-0" side="end">
                <Command className="rounded-lg border shadow-md">
                  <CommandInput placeholder={t("PageHeader:commandSearchPlaceholder")} />
                  <CommandList>
                    <CommandEmpty>{t("PageHeader:noResultsFound")}</CommandEmpty>
                    <CommandGroup heading={t("PageHeader:exchangingFundsHeading")}>
                      <LanguageRow language="en" i18n={i18n} text={t("PageHeader:english")} />
                      <LanguageRow language="de" i18n={i18n} text={t("PageHeader:german")} />
                    </CommandGroup>
                  </CommandList>
                </Command>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </>
  );
}
