import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";
import { urlCountry } from "../api/url";

interface IdCodeName {
  name: string;
  code: number;
  codename: string;
  division_type: string;
}

interface Province extends IdCodeName {
  phone_code: number;
  districts: District[];
}

interface District {
  id: IdCodeName;
  short_codename: string;
  wards: Ward[];
}

interface Ward {
  id: IdCodeName;
  short_codename: string;
}

export const useProvine = () => {
  const [province, setProvince] = useState<Province[]>([]);
  useLayoutEffect(() => {
    axios.get(urlCountry).then((res) => {
      setProvince(res.data);
    });
  }, []);
  
  return province;
};
