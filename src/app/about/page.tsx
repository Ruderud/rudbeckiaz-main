import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="px-40 pt-20">
      <p className="text-sm text-black dark:text-slate-300">Latest Update: 2023. 6. 8.</p>

      <section className="border-b-[2px] py-10">
        <header className="pb-10">
          <p className="text-4xl font-bold">정 경훈</p>
          <p className="text-2xl font-bold">Kyung-Hoon Jung (Rud)</p>
        </header>

        <article className="leading-6 pb-10">
          <p>좋은 소프트웨어 엔지니어를 지향하는 개발자 정경훈입니다.</p>
          <p>
            지향하는 바를 달성하기 위해서 기초가 되는 Computer Science지식을 꾸준히 학습하고 좋은 코드 디자인에 대해
            고민하며, React와 Typescript를 활용하여 제품을 만들어 나가고 있습니다.
          </p>
          <p>좋은 동료들과 중요한 문제를 해결하며 임팩트 있는 제품을 만들어 나가고 싶습니다.</p>
        </article>

        <div className="pl-6">
          <p>
            📧 Email:{' '}
            <Link className="text-blue-400 font-bold" href="mailto:ruderud0055@gmail.com">
              Ruderud0055@gmail.com
            </Link>
          </p>
          <p>
            🐱 Github:{' '}
            <Link className="text-blue-400 font-bold" href="https://github.com/Ruderud" target="_blank">
              https://github.com/Ruderud
            </Link>
          </p>
        </div>
      </section>

      <section className="border-b-[2px] py-10">
        <header className="pb-10">
          <p className="text-2xl font-bold">Work Experience</p>
        </header>

        <article className="pb-10">
          <p className="text-xl font-bold">🏢 Three ducks</p>
          <p className="text-sm text-black dark:text-slate-300 pb-5">2023. 1. - 2023. 5. | Web Engineer (Intern)</p>

          <div className="pl-6 pb-5">
            <p className="text-lg font-bold">Stari Web</p>
            <p className="text-md">
              <Link className="text-blue-400 font-bold" href="https://stari.io" target="_blank">
                Stari
              </Link>
              는 300여명 이상의 다양한 스타와 그들의 팬들을 영상을 통해 연결해주는 플랫폼입니다.
            </p>
            <p className="text-md">
              신규 스타 등록 및 고객의 영상 구입, 신규 기능 추가, 유지보수등의 운영업무 전반을 담당했습니다.
            </p>
            <p className="text-md"></p>

            <ul className="pl-6 pt-5 list-disc flex flex-col gap-y-4 ">
              <li>Lagacy Order API Migration: </li>
              <li>신규 프로모션 릴리즈</li>
              <li>비디오 UI 리뉴얼 릴리즈</li>
              <li>주문 페이지 리뉴얼 릴리즈</li>
            </ul>
          </div>

          <div className="pl-6">
            <p className="text-lg font-bold">Stari Admin Tool</p>
            <p className="text-md">
              Stari에서의 스타 신규 계약 및 관리, 고객 주문사항 관리, 정산 관련 내용을 다루는 관리자 웹
              어플리케이션입니다.
            </p>

            <ul className="pl-6 pt-5 list-disc flex flex-col gap-y-4">
              <li>신규 스타 가입 폼 리뉴얼 릴리즈</li>
              <li>JS to TS Migration</li>
              <li>주문 내역 검색기능 릴리즈</li>
              <li>i18n 릴리즈</li>
            </ul>
          </div>
        </article>
      </section>
    </main>
  );
}
