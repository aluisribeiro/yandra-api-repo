import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  resume: string;

  @Column()
  description: string;

  @Column({type: 'decimal', default: 0.00})
  price: number;

  @Column('time')
  time: Date;

  @Column({ default: true })
  isActive: boolean;
}