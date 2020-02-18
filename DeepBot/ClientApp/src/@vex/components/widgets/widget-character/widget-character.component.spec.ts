import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetCharacterComponent } from './widget-character.component';

describe('WidgetQuickCenterComponent', () => {
  let component: WidgetCharacterComponent;
  let fixture: ComponentFixture<WidgetCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetCharacterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
