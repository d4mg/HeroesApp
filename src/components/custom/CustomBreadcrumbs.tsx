import { SlashIcon } from "lucide-react"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "../ui/breadcrumb"
import { Link } from "react-router";

interface Breadcrum {
    label: string;
    to: string;
}

interface Props {
    currentPage: string;
    breadcrums?: Breadcrum[];
}

export const CustomBreadcrumbs = ({currentPage, breadcrums = []}:Props) => {
  return (
  <Breadcrumb>
  <BreadcrumbList className="my-5">
    <BreadcrumbItem>
      <BreadcrumbLink asChild>
        <Link to='/'> Inicio </Link>
      </BreadcrumbLink>
    </BreadcrumbItem>

    {
        breadcrums.map((crumb) => (
            <div className="flex items-center">
            <BreadcrumbItem >
                <BreadcrumbSeparator>
                <SlashIcon />
                </BreadcrumbSeparator>  
                <BreadcrumbLink asChild>
                    <Link to={crumb.to}> {crumb.label} </Link>
                </BreadcrumbLink>
            </BreadcrumbItem>
            </div>
        ))}

        <BreadcrumbSeparator>
            <SlashIcon/>
        </BreadcrumbSeparator>

    <BreadcrumbItem>
      <BreadcrumbLink className="text-black">{currentPage}</BreadcrumbLink>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
  )
}
