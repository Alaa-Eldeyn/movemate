"use client";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

const BreadCrumbs = () => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <nav aria-label="Breadcrumb" className="p-3 mb-5 container">
      <ol className="flex justify-center items-center gap-1 text-xl text-gray-600">
        <li>
          <a href="/" className="block transition hover:text-gray-700">
            <span className="sr-only"> Heim </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </a>
        </li>
        {pathNames.map((path, index) => {
          let label = path;
          switch (path) {
            case "about":
              label = "Über Uns";
              break;
            case "contact":
              label = "kontakt";
              break;
            case "services":
              label = "Dienstleistungen";
              break;
            case "moving":
              label = "Umzug";
              break;
            case "cleaning":
              label = "Reinigung";
              break;
            case "painting":
              label = "Maler Arbeit im Innenbereich";
              break;
            case "furniture":
              label = "Möbel und Lampen Montag";
              break;
            case "disposal":
              label = "Entsorgung und Räumungen";
              break;
            default:
              break;
          }
          return (
            <Fragment key={index}>
              <li className="rtl:rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
              <li>
                {index === pathNames.length - 1 ? (
                  <span className="block cursor-pointer transition hover:text-gray-700 capitalize">
                    {label}
                  </span>
                ) : (
                  <a
                    href={`/${path}`}
                    className="block cursor-pointer transition hover:text-gray-700 capitalize"
                  >
                    {label}
                  </a>
                )}
              </li>
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
