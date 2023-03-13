import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

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
    nullable: false,
    default: '#ffffff',
  })
  background: string;

  @ManyToOne(() => User, (user) => user.boards)
  user: User
}