import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type BreadcrumbType = {
  href?: string;
  label: string;
  isPage?: boolean;
};

type HeaderProps = {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbType[];
};

const Header = ({ title, subtitle, breadcrumbs }: HeaderProps) => {
  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 px-4 pt-4 md:flex">
      <div className="flex items-center justify-between space-y-2 pb-6 border-b">
        <div>
          <div className="mb-4">
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumbs.map((breadcrumb, index) => (
                  <React.Fragment key={index}>
                    <BreadcrumbItem>
                      {breadcrumb.isPage ? (
                        <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink href={breadcrumb.href || "#"}>
                          {breadcrumb.label}
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                    {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <h2 className="text-3xl font-bold tracking-tight mb-2">{title}</h2>
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};

export default Header;
