const Button = ({ styles }) => {
	return (
		<button
			type='button'
			className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient outline-none ${styles} rounded-[20px]`}
		>
			Get Started
		</button>
	);
};

export default Button;
