"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Select, Stack, Box, FormControl, FormLabel } from "@chakra-ui/react";

interface FilterBarProps {
  years: number[];
}

const FilterBar: React.FC<FilterBarProps> = ({ years }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const yearFilter = searchParams.get("year");

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedYear = event.target.value;
    const params = new URLSearchParams(searchParams);

    if (selectedYear) {
      params.set("year", selectedYear);
    } else {
      params.delete("year");
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <Box
      mt={6}
      maxW="sm"
      mx="auto"
      p={4}
      bg="white"
      borderRadius="md"
      boxShadow="md"
      className="dark:bg-gray-800 dark:text-gray-200"
    >
      <FormControl id="yearFilter">
        <FormLabel
          fontWeight="bold"
          color="gray.700"
          className="dark:bg-gray-800 dark:text-gray-200"
          mb={2}
        >
          Year Read
        </FormLabel>
        <Select
          value={yearFilter || ""}
          onChange={handleYearChange}
          size="lg"
          bg="gray.50"
          borderColor="gray.300"
          _hover={{ borderColor: "gray.400" }}
          _focus={{ borderColor: "blue.500", boxShadow: "outline" }}
          borderRadius="md"
          fontWeight="medium"
          className="dark:bg-gray-800 dark:text-gray-200"
        >
          <option
            value=""
            className="bg-gray-50 dark:bg-gray-700 dark:text-gray-200"
          >
            All Years
          </option>
          {years.map((year) => (
            <option
              key={year}
              value={year}
              className="bg-gray-50 dark:bg-gray-800 dark:text-gray-200"
            >
              {year}
            </option>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterBar;
