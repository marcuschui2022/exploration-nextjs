import { Metadata } from "next";
import CabinList from "@/app/_components/CabinList";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";

/**
 * A variable that determines whether to perform revalidation.
 *
 * `revalidate` is an integer (in seconds) that acts as a flag to decide if revalidation is required.
 * A value of 0 typically means no revalidation is necessary, while any non-zero value
 * indicates that revalidation should be performed.
 *
 * Common use cases:
 *  - In caching mechanisms, where revalidation of cached data might be necessary.
 *  - Form validation processes, where certain conditions might trigger a revalidation of form inputs.
 */
export const revalidate: number = 15; // in seconds

export const metadata: Metadata = {
  title: "Cabins",
};

export default function Page() {
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <Suspense fallback={<Spinner />}>
        <CabinList />
      </Suspense>
    </div>
  );
}
