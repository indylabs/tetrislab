"use server";

import { createClient } from "@supabase/supabase-js";

import type { TetrisLabState } from '@/types';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

async function insertParticipant(state: TetrisLabState) {
  const { data, error } = await supabase
    .from("participants")
    .insert([state]);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export default insertParticipant;