import React from 'react';
import {
  ScheduleContainer,
  ScheduleContent,
  SectionTitle,
  ScheduleGrid,
  AgeGroupCard,
  AgeGroupTitle,
  ScheduleList,
  ImportantNote,
} from './Schedule.styles';

const Schedule: React.FC = () => {
  return (
    <ScheduleContainer id="schedule">
      <ScheduleContent>
        <SectionTitle>Расписание тренировок</SectionTitle>
        
        <ScheduleGrid>
          <AgeGroupCard>
            <AgeGroupTitle>7-9 лет</AgeGroupTitle>
            <ScheduleList>
              <li>
                <span className="day">Понедельник</span>
                <span className="time">18:30</span>
              </li>
              <li>
                <span className="day">Среда</span>
                <span className="time">18:30</span>
              </li>
              <li>
                <span className="day">Пятница</span>
                <span className="time">18:30</span>
              </li>
            </ScheduleList>
          </AgeGroupCard>

          <AgeGroupCard>
            <AgeGroupTitle>10+ лет</AgeGroupTitle>
            <ScheduleList>
              <li>
                <span className="day">Понедельник</span>
                <span className="time">20:00</span>
              </li>
              <li>
                <span className="day">Среда</span>
                <span className="time">20:00</span>
              </li>
              <li>
                <span className="day">Пятница</span>
                <span className="time">20:00</span>
              </li>
            </ScheduleList>
          </AgeGroupCard>

          <AgeGroupCard>
            <AgeGroupTitle className="secondary">4-6 лет</AgeGroupTitle>
            <ScheduleList>
              <li>
                <span className="day">Вторник</span>
                <span className="time">19:00</span>
              </li>
              <li>
                <span className="day">Четверг</span>
                <span className="time">19:00</span>
              </li>
              <li>
                <span className="day">Суббота</span>
                <span className="time">14:30</span>
              </li>
            </ScheduleList>
          </AgeGroupCard>
        </ScheduleGrid>

        <ImportantNote>
          <h3>ПЕРВАЯ ТРЕНИРОВКА БЕСПЛАТНО!</h3>
          <p>
            Не откладывайте! Места в группах ограничены. 
            Приходите на пробную тренировку и убедитесь в качестве нашего обучения.
          </p>
          <p className="schedule-note">
            ⚠️ <strong>Важно:</strong> Время тренировок может измениться. 
            Пожалуйста, уточняйте актуальное расписание перед приходом на тренировку.
          </p>
        </ImportantNote>

      </ScheduleContent>
    </ScheduleContainer>
  );
};

export default Schedule;
