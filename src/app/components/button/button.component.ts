import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent implements OnInit {
  @Input() text: String = '';
  @Input() color: String = '';
  @Output() btnClick = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
  }
}
