
import { MonthlyRetrospectContainer , MonthlyRetrospectNoneImgBox, MonthlyRetrospectNoneImg} from './MonthlyRetrospects.styles'

import YearDateBox from '../year-date-box/YearDateBox.container';
import TodayRetrospect from '../today-retrospects/TodayRetrospect.container';
import RetrospectList from './list/List.container';


export default function MonthlyHabitTrackerUI(props) {




    return (
        // html 부분을 여기에 담아라
        <div>

            <MonthlyRetrospectContainer>

                <YearDateBox 
                  showDate={props.showDate}
                  monthDown={props.monthDown}
                  monthUp={props.monthUp}
                  />

                {/* <!-- ---  오늘의 회고  ---  --> */}
                < TodayRetrospect 
                getUserRetrospects={props.getUserRetrospects}
                />

                {/* <!-- ---  월간 회고가 없을 때 나타나는 이미지  ---  --> */}
               {!(props.userRetrospect) && <MonthlyRetrospectNoneImgBox>
                    <MonthlyRetrospectNoneImg src="/image/img-no-retrospect.svg" alt="작성된 회고 없음" />
                </MonthlyRetrospectNoneImgBox> }




                {/* 월간회고 컨텐츠 박스 */}
                <RetrospectList 
                 data={props.data}
                 getUserRetrospects={props.getUserRetrospects}
                 />


                



            </MonthlyRetrospectContainer>
        </div>
    )

}