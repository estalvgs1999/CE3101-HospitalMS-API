import { EvaluationEntity } from "./evaluation.entity";
import { EntityRepository, MongoRepository } from "typeorm";
import { EvaluationDTO } from "./evaluation.dto";
import { v4 as uuidv4 } from 'uuid';
/**
 * Repository of the db
 */
@EntityRepository(EvaluationEntity)
export class EvaluationRepository extends MongoRepository<EvaluationEntity>{
    /**
     * Create a new evaluation 
     * @param evaluationDTO data of the evaluation
     */
    async createEvaluation(evaluationDTO: EvaluationDTO){
        const {clean_hospital, personal_relation, punctuality} = evaluationDTO;
        const evaluation = new EvaluationEntity();
        evaluation.id = uuidv4(); 
        evaluation.clean_hospital = clean_hospital;
        evaluation.personal_relation = personal_relation;
        evaluation.punctuality = punctuality;
        return await evaluation.save();
    }
}