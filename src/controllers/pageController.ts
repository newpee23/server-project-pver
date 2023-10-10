import { Request, Response } from "express";
import { FormDataP0, FromP0Err } from "../types/pageType";
import { validateDataForm0, validateValueFrom0 } from "../middleware/validateController";
import { findQuestionnaireData } from "./findDataController";
import { QuestionnaireDataStatus } from "../types/findDataType";
import { insertMasterComplete, insertPage0 } from "../models/insertModel";

// Page 0
export const page0Api = async (req: Request, res: Response): Promise<void> => {
  try {
    const dataForm0: FormDataP0 = req.body.data;
    const member_id: number = req.body.member_id;
    const fId: string = req.body.fId;
   
    // ตรวจสอบว่ามีข้อมูลทุกตัวใน dataForm0 หรือไม่
    const validateStr:string = validateDataForm0(dataForm0, member_id, fId);
    if (validateStr === "") {
      // ตรวจสอบว่ามีแบบฟร์อมใน master_complete หรือไม่
      const masterComplete:QuestionnaireDataStatus[] | null = await findQuestionnaireData(fId);
      if(masterComplete !== null && masterComplete.length > 0){
        res.status(200).json({ message: `พบหมายเลขแบบสอบถาม ${fId} ถูกบันทึกแล้ว` , status: false});
        return;
      }
      // ตรวจค่าข้อมูลที่ต้องสอดคล้องกัน
      const newDataForm0: FromP0Err | boolean = validateValueFrom0(dataForm0);
      if(newDataForm0 !== true) {
        res.status(200).json({ message: newDataForm0 , status: false});
        return;
      }
      // Insert master_complete 
      const addMasterComplete: boolean = await insertMasterComplete(member_id, fId, 'page0');
      if(!addMasterComplete){
        res.status(200).json({ message: "เกิดข้อผิดพลาดการประมวลผล กรุณาลองอีกครั้ง" , status: false});
        return;
      }
      // Insert page0
      const addPage0:boolean = await insertPage0(dataForm0,member_id, fId);
      res.status(200).json({ message: "บันทึกข้อมูลหน้าปกสำเร็จ" , status: true});
      return;
    } else {
      res.status(200).json({ message: validateStr , status: false});
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error , status: false});
  }
};

