import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-trial-one',
  imports: [],
  templateUrl: './trial-one.html',
  styleUrl: './trial-one.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrialOne {
  protected items = [0, 0, 0];

  protected onChange(index: number, value: number): void {
    this.items[index] = value;
    //this.items = [...this.items]; //เปลี่ยนตัวเลขตรงค่า items ในหน้า html แต่จะไม่ใช้วิธีนี้เพราะเขียนต่อยาก เลยใส่ .join(',') ต่อท้าย
    console.info(this.items);
  }
}
