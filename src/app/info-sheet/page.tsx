"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import passphraseJS from "passphrase.js";
import getRandomVariant from "@/utils/getRandomVariant";

import { useTetrisLabContext } from "@/state/TetrisLabContext";
import { Container } from "@/components/Container/Container";
import { InformationSheet } from "@/components/InformationSheet/InformationSheet";
import { VARIANTS } from "@/constants";

export default function InformationSheetPage() {
  const { dispatch } = useTetrisLabContext();
  const searchParams = useSearchParams();

  useEffect(() => {
    const variant =
      (searchParams.get("variant") as VARIANTS) || getRandomVariant();

    const participantCode = passphraseJS.genPassPhraseNormal(
      4,
      passphraseJS.effLarge
    );

    dispatch({ type: "INIT_PARTICIPANT", variant, participantCode });
  }, [dispatch, searchParams]);

  return (
    <Container>
      <InformationSheet />
    </Container>
  );
}
