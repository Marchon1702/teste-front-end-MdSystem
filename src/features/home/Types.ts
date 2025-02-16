export interface HomeState {
  status: Status;
  entries: Home[];
  entry: null | Home;
}

export interface Home {
  header: IHeaderResponse;
  banner: IBannerResponse[];
  about: IAboutResponse[];
  service: IServiceResponse[] 
}

export interface IHeaderResponse {
  logo: string;
  menu: ILinkNavigation[];
}

export interface ILinkNavigation {
  label: string;
  link: string;
}

export interface IBannerResponse {
  title: string;
  subtitle: string;
  image: string;
  href: string;
  button: string;
}

export interface IAboutResponse {
  label: string;
  description: string;
}

export interface IServiceResponse {
  title: string;
  text: string;
}
