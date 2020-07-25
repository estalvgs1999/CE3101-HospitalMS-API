import { BaseEntity, PrimaryColumn, Column, OneToMany, Entity } from 'typeorm';
import { Patient } from 'src/patient/patient.entity';
@Entity()
export class ClinicalRecord extends BaseEntity {

  /**
   * Registration code.
   */
  @PrimaryColumn({length:36})
  RecordID: string;

  /**
   * Date the registration is made.
   */
  @Column()
  Date: Date;

  /**
   * Procedure performed on the patient.
   */
  @Column({length:36})
  ProcedureID: string;

  /**
   * Patient's Dni.
   */
  @Column({length:11})
  PatientDni: string;
}