import { Repository, EntityRepository } from "typeorm";
import { Reservation } from "./reservation.entity";
import { ReservationDTO } from "./dto/reservation.dto";
import { v4 as uuidv4 } from 'uuid';
@EntityRepository(Reservation)
export class ReservationRepository extends Repository<Reservation>{
    async createReservation(data: ReservationDTO, finish_date){
        const {ArrivalDate, BedID, PatientDni} = data;
        const reservation = new Reservation;
        reservation.id = uuidv4();
        reservation.arrival_date = ArrivalDate;
        reservation.bed_ = BedID;
        reservation.patient_ = PatientDni;
        reservation.departure_date = finish_date;
        return await reservation.save();
    }
}