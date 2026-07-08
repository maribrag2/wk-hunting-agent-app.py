import { NextResponse } from "next/server";
import { candidatesToCsv } from "@/lib/csv";
import type { CandidateScore } from "@/lib/types";

export async function POST(request: Request) {
  try {
    const { candidates } = (await request.json()) as { candidates?: CandidateScore[] };

    if (!candidates?.length) {
      return NextResponse.json({ error: "Nenhum candidato para exportar." }, { status: 400 });
    }

    const csv = candidatesToCsv(candidates);

    return new Response(csv, {
      headers: {
        "Content-Disposition": 'attachment; filename="wk-hunting-agent-ranking.csv"',
        "Content-Type": "text/csv; charset=utf-8"
      }
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Erro ao exportar CSV." },
      { status: 500 }
    );
  }
}
