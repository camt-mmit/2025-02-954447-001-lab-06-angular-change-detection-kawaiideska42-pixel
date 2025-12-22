import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-section',
  imports: [],
  templateUrl: './dynamic-section.html',
  styleUrl: './dynamic-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicSection {
  // เริ่มต้นด้วย 1 Section ที่มี 1 Number
  protected sections: { numbers: { value: number }[] }[] = [{ numbers: [{ value: 0 }] }];

  protected addSection(): void {
    this.sections.push({ numbers: [{ value: 0 }] });
    console.info(this.sections);
  }

  protected removeSection(index: number): void {
    if (this.sections.length > 1) {
      this.sections.splice(index, 1);
      console.info(this.sections);
    }
  }

  // --- จัดการ Number ภายใน Section ---
  protected addNumber(sectionIndex: number): void {
    this.sections[sectionIndex].numbers.push({ value: 0 });
  }

  protected removeNumber(sectionIndex: number, numIndex: number): void {
    const nums = this.sections[sectionIndex].numbers;
    if (nums.length > 1) {
      nums.splice(numIndex, 1);
    }
  }

  protected onNumberChange(sectionIndex: number, numIndex: number, value: number): void {
    this.sections[sectionIndex].numbers[numIndex].value = value;
  }

  protected getSummaryText(sectionIndex: number): string {
    return this.sections[sectionIndex].numbers
      .map((n) => n.value)
      .reduce((result, value) => result + value)
      .toLocaleString();
  }
}
