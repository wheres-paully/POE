import { unparse } from "papaparse";

export function exportJobsToCSV(jobs) {
  const csv = unparse(jobs);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement("a");
  link.href = url;
  link.download = "job-tracker.csv";
  link.click();
}
