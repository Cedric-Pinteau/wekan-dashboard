import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardExportComponent } from './board-export.component';

describe('BoardExportComponent', () => {
  let component: BoardExportComponent;
  let fixture: ComponentFixture<BoardExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardExportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
