"use client";

import config from '@/sanity/config/client-config';
import { NextStudio } from 'next-sanity/studio';


export default function AdminPage() {
  return <NextStudio config={config} />
}