import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedTasksGraphComponent } from './completed-tasks-graph.component';

describe('CompletedTasksGraphComponent', () => {
  let component: CompletedTasksGraphComponent;
  let fixture: ComponentFixture<CompletedTasksGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedTasksGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedTasksGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
