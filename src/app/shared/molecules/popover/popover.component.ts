import { Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Popover, PopoverModule } from 'primeng/popover';
import { IPopoverOption } from './popover.model';

@Component({
  selector: 'app-popover',
  imports: [ButtonModule, PopoverModule],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.css',
})
export class PopoverComponent {
  optionsHeader = input('');
  label = input('Choose an option');
  options = input.required<IPopoverOption[]>();
  selectedOption: IPopoverOption | null = null;
  onSelect = output<string>();

  toggle(event: Event, op: Popover) {
    op.toggle(event);
  }

  select(option: IPopoverOption, op: Popover) {
    this.onSelect.emit(option.value);
    this.selectedOption = option;
    op.hide();
  }
}
