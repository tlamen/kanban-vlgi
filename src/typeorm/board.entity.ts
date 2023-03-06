import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Board {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'board_id',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  title: string;

  @Column({
    name: 'email_address',
    nullable: false,
    default: '',
  })
  background: string;

}