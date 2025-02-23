"use server";

import { createClient } from "@supabase/supabase-js";

import type { TetrisLabState } from '@/types';

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

async function insertParticipant(state: TetrisLabState) {
  return await supabase.from("participants").insert([state]);
}

export default insertParticipant;