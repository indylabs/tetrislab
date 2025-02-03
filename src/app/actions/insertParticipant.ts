"use server";

import { createClient } from "@supabase/supabase-js";

import type { Participant } from '@/types';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

async function insertParticipant(participant: Participant) {
  const { data, error } = await supabase
    .from("participants")
    .insert([participant]);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export default insertParticipant;