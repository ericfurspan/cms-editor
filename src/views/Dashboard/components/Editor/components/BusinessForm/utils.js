import * as yup from 'yup';

export const validationSchema = yup.object({
  name: yup.string().required(),
  business_email: yup.string().email().nullable().default(''),
  caption: yup.string().nullable().default(''),
  mission_statement: yup.string().nullable().default(''),
  logo: yup.object().nullable(),
  business_hours: yup.object().nullable(),
  social_media_links: yup.object().nullable(),
  podcast_links: yup.object().nullable(),
  payment_links: yup.object().nullable(),
  gallery: yup.array().nullable(),
  news: yup.array().nullable(),
  events: yup.array().nullable(),
});
