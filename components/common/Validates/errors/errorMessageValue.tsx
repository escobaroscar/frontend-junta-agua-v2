import { FC } from "react";

interface ProposError {
  error: string | undefined;
  touched: boolean | undefined;
}
export const ErrorMessage: FC<ProposError> = ({ error, touched }) => {
  return (
    <div className="h-3 py-1">
      {error && touched ? (
        <div className="text-sm text-red-500">{error}</div>
      ) : null}
    </div>
  );
};