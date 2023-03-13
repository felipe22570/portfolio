const TechnologyCard = ({ data }: { data: ITechnology[] }) => {
	return (
		<div className="bg-white min-h-32 w-full rounded-lg p-5">
			<div className="flex flex-col items-center gap-5">
				{data.map((tech) => (
					<div key={tech.icon} className="flex items-center gap-3">
						<img src={tech.icon} alt="" className="w-10" />
						<p>{tech.name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default TechnologyCard;
