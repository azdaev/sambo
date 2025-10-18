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
            <AgeGroupTitle>7-9 лет и 10+</AgeGroupTitle>
            <ScheduleList>
              <li>
                <span className="day">Понедельник</span>
                <span className="time">17:00 - 18:30</span>
              </li>
              <li>
                <span className="day">Среда</span>
                <span className="time">17:00 - 18:30</span>
              </li>
              <li>
                <span className="day">Пятница</span>
                <span className="time">17:00 - 18:30</span>
              </li>
            </ScheduleList>
          </AgeGroupCard>

          <AgeGroupCard>
            <AgeGroupTitle className="secondary">4-6 лет</AgeGroupTitle>
            <ScheduleList>
              <li>
                <span className="day">Вторник</span>
                <span className="time">17:00 - 18:00</span>
              </li>
              <li>
                <span className="day">Четверг</span>
                <span className="time">17:00 - 18:00</span>
              </li>
              <li>
                <span className="day">Суббота</span>
                <span className="time">10:00 - 11:00</span>
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
        </ImportantNote>

      </ScheduleContent>
    </ScheduleContainer>
  );
};

export default Schedule;
