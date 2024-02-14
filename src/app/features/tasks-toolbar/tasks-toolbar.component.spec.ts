import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksToolbarComponent } from './tasks-toolbar.component';

describe('TasksToolbarComponent', () => {
  let component: TasksToolbarComponent;
  let fixture: ComponentFixture<TasksToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksToolbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TasksToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
