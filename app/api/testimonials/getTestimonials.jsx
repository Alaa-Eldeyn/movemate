// @ts-nocheck
import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: process.env.SPACE_ID,
  environment: "master",
  accessToken: process.env.CONTENTFUL_TOKEN,
});

export const useGetTestimonials = () => {
  const [loading, setLoading] = useState(true);
  const [testimonials, setTestimonials] = useState([]);
  const fetchData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "testimonials",
      });
      const projects = response.items.map((item) => {
        const { customerName, description } = item.fields;
        const id = item.sys.id;
        return { id, customerName, description };
      });
      setTestimonials(projects);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { loading, testimonials };
};
