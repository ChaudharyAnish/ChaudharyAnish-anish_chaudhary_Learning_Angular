import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballListItemComponent } from './football-list-item.component';

describe('FootballListItemComponent', () => {
  let component: FootballListItemComponent;
  let fixture: ComponentFixture<FootballListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FootballListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootballListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
