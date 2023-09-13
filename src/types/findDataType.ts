import { RowDataPacket } from "mysql2";

export interface QuestionnaireDataStatus extends RowDataPacket {
  rec_id: number;
  form_id: string | null;
  form_status: '1' | '2' | '3';
  p0_u: string;
  status_p0_u: '1' | '2' | '3';
  p0_t: string | null;
  p1_u: string | null;
  status_p1_u: '1' | '2' | '3';
  p1_t: string | null;
  p3_u: string | null;
  status_p3_u: '1' | '2' | '3';
  p3_t: string | null;
  p4_u: string | null;
  status_p4_u: '1' | '2' | '3';
  p4_t: string | null;
  p5_u: string | null;
  status_p5_u: '1' | '2' | '3';
  p5_t: string | null;
  p6_u: string | null;
  status_p6_u: '1' | '2' | '3';
  p6_t: string | null;
  p7_u: string | null;
  status_p7_u: '1' | '2' | '3';
  p7_t: string | null;
  p8_u: string | null;
  status_p8_u: '1' | '2' | '3';
  p8_t: string | null;
  p9_u: string | null;
  status_p9_u: '1' | '2' | '3';
  p9_t: string | null;
  p10_u: string | null;
  status_p10_u: '1' | '2' | '3';
  p10_t: string | null;
  p11_u: string | null;
  status_p11_u: '1' | '2' | '3';
  p11_t: string | null;
  p12_u: string | null;
  status_p12_u: '1' | '2' | '3';
  p12_t: string | null;
  p13_u: string | null;
  status_p13_u: '1' | '2' | '3';
  p13_t: string | null;
  p14_u: string | null;
  status_p14_u: '1' | '2' | '3';
  p14_t: string | null;
  p15_u: string | null;
  status_p15_u: '1' | '2' | '3';
  p15_t: string | null;
  p16_u: string | null;
  status_p16_u: '1' | '2' | '3';
  p16_t: string | null;
  p17_u: string | null;
  status_p17_u: '1' | '2' | '3';
  p17_t: string | null;
  member_id: number;
  member_id_d: number;
}