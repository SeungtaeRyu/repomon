# 🐱‍👤 RepoMon 🐱‍👤

<div style="margin-left: 5px;" align="center">
SSAFY 8기 2학기 자율프로젝트
<div style="font-weight: bold; font-size: 1.2em;">2023.04.10 ~ 2023.05.19</div>
</div>


## 🐒 팀원 소개

<table>
  <tbody>
    <tr>
     <td align="center">
        <a href="https://github.com/SeungtaeRyu">
            <img src="https://avatars.githubusercontent.com/u/81846487?v=4" width="100px;"/>
            <br />
            <sub>🐓 <b>류승태</b></sub>
        </a>
        </td>
        <td>
            <ul>
                <li>spring security oauth2.0를 활용하여 github 소셜 로그인 구현</li>
                <li>JWT를 사용하여 access token 및 refresh token 생성</li>
                <li>DB read 부하를 줄이기 위해 Redis에 refresh token을 저장</li>
                <li>랭킹 시스템 API 설계 및 구현</li>
                <li>유저 정보 API 설계 및 구현</li>
            </ul>
        </td>
        </tr>
        <tr>
        <td align="center">
        <a href="https://github.com/ddings73">
            <img src="https://avatars.githubusercontent.com/u/76030391?v=4" width="100px;"/>
            <br />
            <sub>🐂 <b>안명수</b></sub>
        </a>
        </td>
        <td>
            <ul>
                <li>레포지토리 관련 GitHub API 로직을 담당했습니다.</li>
                <li>레포지토리 GitHub API 관련 AOP 로직을 담당했습니다.</li>
                <li>레포지토리 분석 로직을 담당했습니다.</li>
                <li>레포지토리 리스트 로직을 담당했습니다.</li>
            </ul>
        </td>
     </tr>
   <tr>
        <td align="center">
        <a href="https://github.com/becoding96">
            <img src="https://avatars.githubusercontent.com/u/88614621?v=4" width="100px;"/>
            <br />
            <sub>🐀 <b>백준봉</b></sub>
        </a>
        </td>
        <td>
            <ul>
                <li>메인 페이지를 구현했습니다.</li>
                <li>레포지토리 상세 페이지를 구현했습니다.</li>
                <li>레포몬 서비스의 익스텐션을 제작했습니다.</li>
                <li>프론트엔드 로그인을 구현했습니다.</li> 
            </ul>
        </td>
       </tr>
        <tr>
        <td align="center">
        <a href="https://github.com/sub9707">
            <img src="https://avatars.githubusercontent.com/u/110171787?v=4" width="100px;"/>
            <br />
            <sub>🐂 <b>김승섭</b></sub>
        </a>
        </td>
        <td>
            <ul>
                <li>레포몬 배틀 구현을 담당했습니다.</li>
                <li>레포몬 유저 페이지 구현을 담당했습니다.</li>
                <li>레포몬 서비스의 3D 모델의 렌더링 및 애니메이션 구현을 담당했습니다.</li>
                <li>레포몬 등록 서비스의 구현을 담당했습니다.</li>
            </ul>
        </td>
        </tr>
   <tr>
            <td align="center">
        <a href="https://github.com/eunjineee">
            <img src="https://avatars.githubusercontent.com/u/108562895?v=4" width="100px;"/>
            <br />
            <sub>🐅 <b>양은진</b></sub>
        </a>
        </td>
        <td>
            <ul>
                <li>Card (Repo, Repo_personal, User) 담당</li>
                <li>Django 를 이용한 Card 구현</li>
                <li>Repo, Repo_Personal, User Card 관련 레포지토리 요약 API </li>
                <li>Repo_Personal, User Card  언어 설정 API </li> 
            </ul>
        </td>
       </tr>
        <tr>
        <td align="center">
        <a href="https://github.com/Hello1Robot">
            <img src="https://avatars.githubusercontent.com/u/109326426?v=4" width="100px;"/>
            <br />
            <sub>🐖 <b>최권민</b></sub>
        </a>
        </td>
        <td>
            <ul>
                <li>ERD 및 백엔드 기초 구조를 담당했습니다.</li>
                <li>레포몬 모델 선정 및 관련 API를 구현했습니다.</li>
                <li>배틀 관련 로직 및 관련 API를 구현하였습니다.</li>
            </ul>
        </td>
     </tr>
    </tbody>
</table>



<br><br>

## 🐀 서비스 소개

"**레포몬**"은 Github 레포지토리의 정보를 분석 및 요약하여 레포지토리를 대표하는 캐릭터와 함께 **한 장의 카드로** 만들어 나타낼 수 있게 하는 서비스입니다.

 먼저 **레포지토리 분석 기능**에서는 레포지토리의 정보를 가져와 커밋, 머지, 이슈, 리뷰, 포크, 스타를 점수화 시켜 총 경험치를 나타내줍니다. 또한 컨벤션을 등록하여 준수율을 확인하고, 각 커밋의 기여도를 유저 별로 나타낼 수 있습니다.

 다음으로 **정보 카드 생성**입니다. 사용자의 정보를 요약한 유저 카드, 레포지토리의 정보를 요약한 레포 카드, 해당 레포지토리에서 본인의 기여도 및 언어를 선택하여 제작할 수 있는 퍼스널 레포 카드 세 가지를 생성할 수 있습니다.

 마지막으로 **레포몬 배틀**입니다. 앞서 획득했던 경험치를 토대로 레포몬을 진화 및 성장시킬 수 있으며, 나만의 레포몬과 다른 사람의 레포몬을 배틀을 통해 경쟁시킬 수 있습니다.


이러한 기능을 통해 프로젝트를 활성화하고, 레포지토리의 분석 결과를 리드미에 작성해보세요 ✨



<br><br>




## 🐅 주요 기능
- 레포지토리 분석

  ![Repo_Detail_page](README.assets/Repo_Detail_page.gif)

  

- 레포지토리 요약 카드

  ![Repository_card](README.assets/Repository_card.gif)

  

- 레포몬 생성

  ![Repomon_create](README.assets/Repomon_create.gif)

  

- 레포몬 배틀

  ![Repomon_Battle](README.assets/Repomon_Battle.gif)

  

- 랭킹 시스템

  ![Ranking_page](README.assets/Ranking_page.gif)


<br><br>



## 🐍 ERD
![ERD](./exec/ERD.png)


<br><br>


## 🐑 아키텍처 구조
![arch](./exec/아키텍처.png)

<br><br>

## 🐨 기술 스택

### ✔️ 개발 환경

- **IDE**
    - **`Intellij` : 2022.3.1**
    - **`Visual Studio Code` : 1.74.2**
- **DB**
    - **`MySQL` : 8.0.31**
    - **`Redis` : 7.0.10**
- **UI & UX**
    - **`Figma`**
- **Server :**
    - **`AWS EC2 Ubuntu` : 22.04**
    - **`S3`**
    - **`Nginx` : 1.23.3**

### ✔️ 백엔드

- **`JAVA` : 11.0.17**
- **`Spring Boot` : 2.7.10**
- **`Gradle` : 7.6.1**
- **`Spring Boot Starter Data JPA`**
- **`Spring Boot Starter Security`**
- **`Spring Boot Starter AOP`**
- **`GitHub API for JAVA` : 1.314**
- **`JJWT` : 0.9.1**

### ✔️ 프론트엔드

- **`React` : 18.2.0**
- **`NextJS` : 13.3.0**
- **`typescript` : 5.0.4**
- **`Redux` : 8.0.5**
- **`Redux Toolkit` : 1.9.5**
- **`ThreeJS` : 0.151.3**
- **`Tailwind`** : 3.3.1

### ✔️ CI/CD

- **`Jenkins` : 2.401**
- **`Docker` : 23.0.4**

### ✔️ 이슈 관리

- **`Jira`**

### ✔️ 형상 관리

- **`Gitlab`**

### ✔️ 커뮤니케이션

- **`Notion`**
- **`MatterMost`**
- **`Discord`**

