const Loader = ({
  size = 'base', // 'sm', 'base', 'lg'
  className = '',
}) => {
  const sizes = {
    sm: 'w-6 h-6 border-2',
    base: 'w-10 h-10 border-4',
    lg: 'w-16 h-16 border-4',
  };

  return (
    <div
      className={`inline-block animate-spin rounded-full border-blue-600 border-solid border-t-transparent ${sizes[size]} ${className}`}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};
export default Loader;