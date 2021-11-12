import Image from "components/Image";
import { ReactNode, StyleHTMLAttributes } from "react";
import styles from "./Section2.module.scss";

const Title: React.FC = ({ children }) => (
  <div className={styles.title}>
    <div className={styles.titlePoint}>
      <Image src="/images/icon-point-title.png" width="25" height="25" />
    </div>
    {children}
  </div>
);
const SubTitle: React.FC = ({ children }) => (
  <div className={styles.subtitle}>
    <div className={styles.subtitlePoint}>
      <Image src="/images/icon-point-subtitle.png" width="5" height="5" />
    </div>
    {children}
  </div>
);
const Content: React.FC = ({ children }) => <div className={styles.content}>- {children}</div>;
const Note: React.FC = ({ children }) => <div className={styles.note}>* {children}</div>;
const FirstText: React.FC = ({ children }) => <div className={styles.firstText}>· {children}</div>;
const SecondText: React.FC = ({ children }) => (
  <div className={styles.secondText}>- {children}</div>
);

export const Section2 = () => (
  <div className={styles.container}>
    <div className={styles.display}>
      <div>
        <Title>목적</Title>
        <SubTitle>
          유망한 창업 아이템을 보유한 창업자 대상 경진대회를 통해 창업 능력을 키우고 우수 아이템
          시상을 통해 창업 분위기 확산
        </SubTitle>
      </div>
      <div>
        <Title>운영주체</Title>
        <SubTitle>주최: 안동시</SubTitle>
        <SubTitle>주관: 안동대학교</SubTitle>
      </div>
      <div>
        <Title>참가자격</Title>
        <SubTitle>예비창업자 및 창업 7년 이내 창업자</SubTitle>
        <div className={styles.qualification}>
          <div className={styles.tableHeader}>구분</div>
          <div className={styles.tableHeader} style={{ gridColumn: "span 2" }}>
            아이디어톤
          </div>
          <div className={styles.tableSubHeader}>창업구분</div>
          <div>예비 창업자</div>
          <div>창업 기업</div>
          <div className={styles.tableSubHeader}>신청자격</div>
          <div className={styles.noneAlign}>
            <FirstText>예비창업자(대학생)</FirstText>
            <SecondText>
              일반인
              <br />
              <span className={styles.red}>
                (주민등록상 주소 및 근로하는 사업장의 주소가 안동시일 경우만 해당/단 고용 보험에
                가입되어 있어야 함)
              </span>
            </SecondText>
            <SecondText>
              대학생 및 대학교 창업동아리&nbsp;
              <span className={styles.red}>(안동지역 대학교만 해당)</span>
            </SecondText>
            <SecondText>사업자가 없는 경우</SecondText>
          </div>
          <div className={styles.noneAlign}>
            <FirstText>창업 7년 미만 사업자</FirstText>
            <SecondText>
              <span className={styles.red}>사업장 주소가 안동시일 경우만 해당</span>
            </SecondText>
            <SecondText>15. 3. 1. 이후 창업자</SecondText>
            <SecondText>(법인) 설립등기일, (개인)사업자등록일 기준</SecondText>
          </div>
        </div>
        <Content>
          창업자는 ｢중소기업창업 지원법｣ 시행령 제2조에 따른 창업의 범위와 제3조에 사업의 개시일을
          적용
        </Content>
        <Content>
          창업일은 개인사업자의 경우 사업개시일(사업자등록증상의 개업일), 법인기업의 경우
          법인등기부등본상 회사성립연월일을 기준
        </Content>
        <Content>
          다수의 사업자(개인, 법인)를 소지한 경우, 최초 등록한 사업자의 기준일로 산정
        </Content>
        <Note>참가자격 확인을 위한 제출 증빙서류는 별첨 참조</Note>
      </div>
      <div>
        <Title>참가 제외대상</Title>
        <SubTitle>
          타인의 특허, 실용신안 등 지식재산권을 침해하거나 침해할 우려가 있는 아이템
        </SubTitle>
        <SubTitle>
          「중소기업창업 지원법」 시행령 제4조에 따라 창업에서 제외되는 업종과 사행성 및 환경오염
          유발 등 반 사회적 성격의 창업 아이템
        </SubTitle>
        <SubTitle>
          통합공고일 기준(’21.10.27.) 동일 또는 유사한 아이템으로 과거 창업경진대회를 통해 누적 상금
          3천만원 이상을 받은자
        </SubTitle>
        <Note>예비창업자의 경우 팀원의 수상내역을 포함, 기창업자는 대표자 수상내역만 해당</Note>
        <Note>향후 참가자격 부적격 확인 시 참가자격 박탈 및 상금이 환수 될 수 있습니다.</Note>
      </div>
      <div>
        <Title>신청방법</Title>
        <SubTitle>신청기간: 2021.10.29.(금) ~ 11.12.(금), 자정까지</SubTitle>
        <SubTitle>
          신청방법: ‘2021 B ETA 페스티벌 아이디어톤 경진대회 (www.betafesta.kr)’에 접속하여 ‘2021
          온라인 참가 신청’ 페이지를 통해 참가신청서(사업계획서) 온라인 제출
        </SubTitle>
        <Content>
          접수 마감일에는 다수의 신청자 접속으로 홈페이지 접속이 원활하지 않거나 오류가 발생할 수
          있으니 미리 신청(마감 2~3일 전)하여 주시기 바랍니다.
        </Content>
        <Note>사업계획서 제출완료 이후에는 수정 불가</Note>
        <SubTitle>
          제출서류: 참가신청서(사업계획서)는 신청 시 제출, 요건검토를 위한 증빙서류(대표자 신분증
          사본 및 사실증명, 사업자등록증 사본 또는 사업자등록증명원) 제출
        </SubTitle>
        <Content>신청 시 제출서류 : 참가신청서</Content>
        <Note>자격검토를 위한 모든 증빙서류는 공고일(21.10.27.)이후 발급된 것으로 제출</Note>
        <Note>참가 신청서, 사업계획서에 기재된 내용에 대한 증빙서류 제출</Note>
        <Note>예비창업자(팀)은 팀원의 신분증사본, 사실증명 제출</Note>
        <Note>증빙서류 검토 시 제출내용에 대해 허위사실이 발견될 경우, 선정 대상에서 제외</Note>
      </div>
      <div>
        <Title>평가방법</Title>
        <SubTitle>선정규모: IR발표 평가를 통해 분야별 3팀씩 6팀 선정</SubTitle>
        <SubTitle>평가일정</SubTitle>
        <Content>예비창업자: 2021년 11월 18일 16:00</Content>
        <Content>창업 기업: 2021년 11월 19일 13:00</Content>
        <SubTitle>평가장소: 안동그랜드호텔(특설무대)</SubTitle>
        <SubTitle>
          평가방법: 사업계획서·발표자료를 바탕으로 참가자(팀)의 문제인식, 해결방안, 성장전략, 팀구성
          등을 발표평가(발표 5분, 질의응답 5분)
        </SubTitle>
        <Note>발표평가 방식으로 진행하며, 별도의 발표자료 준비 필요(PPT등)</Note>
        <div className={styles.rating}>
          <div className={styles.tableHeader}>평가항목</div>
          <div className={styles.tableHeader}>세부내용</div>
          <div className={styles.tableSubHeader}>문제인식</div>
          <div className={styles.noneAlign}>창업아이템 개발동기, 목적 및 필요성</div>
          <div className={styles.tableSubHeader}>해결방안</div>
          <div className={styles.noneAlign}>
            창업아이템의 사업화 전략, 시장분석 및 경쟁력 확보방안
          </div>
          <div className={styles.tableSubHeader}>성장전략</div>
          <div className={styles.noneAlign}>자금소요 및 조달계획, 시장진입 및 성과창출 전략</div>
          <div className={styles.tableSubHeader}>팀 구성</div>
          <div className={styles.noneAlign}>대표자 및 팀원의 보유역량</div>
        </div>
        <Note>대내외 사정에 따라 평가방법, 평가일정 등은 변경될 수 있음</Note>
      </div>
      <div>
        <Title>시상내역</Title>
        <div className={styles.awardDesktop}>
          <div className={styles.tableHeader} style={{ gridColumn: "span 3" }}>
            예비창업자 아이디어톤
          </div>
          <div className={styles.tableHeader} style={{ gridColumn: "span 3" }}>
            창업기업 아이디어톤
          </div>
          <div className={styles.tableSubHeader}>구분</div>
          <div className={styles.tableSubHeader}>훈격</div>
          <div className={styles.tableSubHeader}>부상</div>
          <div className={styles.tableSubHeader}>구분</div>
          <div className={styles.tableSubHeader}>훈격</div>
          <div className={styles.tableSubHeader}>부상</div>
          <div>대상 </div>
          <div>안동대학교 총장</div>
          <div>300만원</div>
          <div>대상</div>
          <div style={{ gridRow: "span 3" }}>안동시장</div>
          <div className={styles.awardContent}>
            2022 창업성장 지원사업 대상자 선정 (최대 3000만원 지원)
          </div>
          <div style={{ gridRow: "span 2" }}>우수상</div>
          <div>가톨릭상지대학교 총장</div>
          <div style={{ gridRow: "span 2" }}>200만원</div>
          <div style={{ gridRow: "span 2" }}>우수상(2팀)</div>
          <div className={styles.awardContent} style={{ gridRow: "span 2" }}>
            2022 수요맞춤형 지원사업 수혜기업 선정 안동과학대학교 (최대 1000만원 지원)
          </div>
          <div>안동과학대학교 총장</div>
        </div>
        <Note>적격자가 없을 경우 선정하지 않을 수 있음</Note>
      </div>
      <div className={styles.awardMobile}>
        <div className={styles.tableHeader} style={{ gridColumn: "span 3" }}>
          예비창업자 아이디어톤
        </div>
        <div className={styles.tableSubHeader}>구분</div>
        <div className={styles.tableSubHeader}>훈격</div>
        <div className={styles.tableSubHeader}>부상</div>
        <div>대상 </div>
        <div>안동대학교 총장</div>
        <div>300만원</div>
        <div style={{ gridRow: "span 2" }}>우수상</div>
        <div>가톨릭상지대학교 총장</div>
        <div style={{ gridRow: "span 2" }}>200만원</div>
        <div>안동과학대학교 총장</div>
        <div className={styles.tableHeader} style={{ gridColumn: "span 3" }}>
          창업기업 아이디어톤
        </div>
        <div className={styles.tableSubHeader}>구분</div>
        <div className={styles.tableSubHeader}>훈격</div>
        <div className={styles.tableSubHeader}>부상</div>
        <div>대상</div>
        <div style={{ gridRow: "span 3" }}>안동시장</div>
        <div className={styles.awardContent}>
          2022 창업성장 지원사업 대상자 선정 (최대 3000만원 지원)
        </div>
        <div style={{ gridRow: "span 2" }}>우수상(2팀)</div>
        <div className={styles.awardContent} style={{ gridRow: "span 2" }}>
          2022 수요맞춤형 지원사업 수혜기업 선정 안동과학대학교 (최대 1000만원 지원)
        </div>
      </div>
      <div>
        <Title>신청시 주의사항</Title>
        <SubTitle>참가신청 전 모집공고문을 반드시 확인 후 참가 신청</SubTitle>
        <Note>
          공고문 미확인 등으로 발생할 수 있는 불이익 및 그에 따른 책임은 본 경진대회 신청자에게 있음
        </Note>
      </div>
      <div>
        <Title>지식재산권 보호 및 보안 관련</Title>
        <SubTitle>
          (지식재산권 보호) 타인의 아이디어, 기술 등을 모방하였을 경우 발생되는 모든 민‧형사상의
          책임은 참가자 본인에게 있음
        </SubTitle>
        <Content>
          시상식에서 공개된 아이디어를 법적으로 보호받기 위해서는 신 청자가 공개 이전에 직접
          지식재산권을 획득하여야 하며, 아이디어가 출원 전에 공개된 경우, 공개된 시점부터 12개월
          이내 (디자인은 6개월 이내) 공지 예외 적용 주장을 통해 출원 가능
        </Content>
      </div>
      <div>
        <Title>기타사항</Title>
        <SubTitle>
          모집공고문 미숙지 등으로 인해 발생하는 불이익 및 그에 따른 책임은 동 경진대회 신청자에게
          있음
        </SubTitle>
        <SubTitle>
          동 경진대회 수상자로 선정된 이후 공고문 및 관련 규정 및 사업 계획서의 내용을 허위 기재
          또는 누락이 확인된 경우 선정 취소 및 상금 환수 등의 불이익 조치를 받을 수 있음
        </SubTitle>
      </div>
      <div>
        <Title>문의처</Title>
        <SubTitle>접수시스템: http://www.betafesta.kr/</SubTitle>
        <SubTitle>참가 관련 문의</SubTitle>
        <Content>
          문의: <a href="tel:070-4271-3288">070-4271-3288</a>(월-금 09:00-18:00),
          <a href="mailto:andongbetafesta@gmail.com">andongbetafesta@gmail.com</a>
        </Content>
      </div>
    </div>
  </div>
);
