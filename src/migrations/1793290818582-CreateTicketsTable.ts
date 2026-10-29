import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTicketsTable1793290818582 implements MigrationInterface {
    name = 'CreateTicketsTable1793290818582'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Usuario" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "country" character varying NOT NULL, "city" character varying NOT NULL, "phone" character varying NOT NULL, "birthdate" character varying NOT NULL, "gender" character varying NOT NULL, CONSTRAINT "UQ_c2591f33cb2c9e689e241dda91f" UNIQUE ("email"), CONSTRAINT "PK_925c3fc5494373e254405c000eb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tickets" ("id" uuid NOT NULL, "title" character varying(150) NOT NULL, "description" text NOT NULL, "status" character varying(20) NOT NULL, "priority" character varying(20) NOT NULL, "customer_id" character varying NOT NULL, "assigned_agent_id" character varying, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_343bc942ae261cf7a1377f48fd0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_12b901b34113688b4786368510" ON "tickets"  ("status") `);
        await queryRunner.query(`CREATE INDEX "IDX_42e4343476d9c4a46fb565a5c4" ON "tickets"  ("customer_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_38e29092cd4bc15c5e2a516ae9" ON "tickets"  ("assigned_agent_id") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_38e29092cd4bc15c5e2a516ae9"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_42e4343476d9c4a46fb565a5c4"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_12b901b34113688b4786368510"`);
        await queryRunner.query(`DROP TABLE "tickets"`);
        await queryRunner.query(`DROP TABLE "Usuario"`);
    }

}
