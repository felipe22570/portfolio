import { useState } from "react";
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { icons } from "../data/iconsLinks";
import { useStore } from "@nanostores/react";
import { languageStore } from "../store/languageStore";

const languages: ILanguageData[] = [
	{
		name: "English",
		value: "EN",
		icon: icons.english_flag,
	},
	{
		name: "Español",
		value: "ES",
		icon: icons.spanish_flag,
	},
];

function classNames(...classes: unknown[]) {
	return classes.filter(Boolean).join(" ");
}

const Select = () => {
	const language = useStore(languageStore);
	const [languageData, setLanguageData] = useState<ILanguageData | undefined>(
		language ? languages.find((lang) => lang.value === language) : languages[0]
	);

	const changeLanguage = (value: string) => {
		languageStore.set(value);
		setLanguageData(languages.find((lang) => lang.value === value));
	};

	return (
		<Listbox value={language} onChange={changeLanguage}>
			{({ open }) => (
				<div className={`flex items-center gap-x-2`}>
					<div className="relative text-center">
						<Listbox.Button className="relative w-36 cursor-default rounded-md bg-inherit py-1.5 pl-3 pr-10 text-left text-black md:text-white shadow-sm ring-1 ring-inset ring-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-300-500 sm:text-sm sm:leading-6 hover:cursor-pointer">
							<span className="flex items-center justify-center">
								<img className="w-6 h-5" src={languageData?.icon} alt="" />
								<span className="block ml-3 truncate">{languageData?.name}</span>
							</span>
							<span className="absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none">
								<svg
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className={` w-5 h-5 text-gray-400`}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
									/>
								</svg>
							</span>
						</Listbox.Button>

						<Transition
							show={open}
							as={Fragment}
							leave="transition ease-in duration-100"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Listbox.Options className="absolute z-10 w-full py-1 overflow-auto text-base bg-black rounded-md shadow-lg max-h-56 ring-1 ring-white ring-opacity-5 focus:outline-none sm:text-sm">
								{languages.map((option) => (
									<Listbox.Option
										key={option.value}
										className={({ active }) =>
											classNames(
												active
													? "bg-black-pearl-800 text-white"
													: "text-white",
												"relative cursor-default select-none py-2 pl-3 pr-9"
											)
										}
										value={option.value}
									>
										<div className="flex items-center justify-center">
											<img className="w-6 h-5" src={option.icon} alt="" />

											<span
												className={classNames(
													languageData
														? "font-semibold"
														: "font-normal",
													"ml-3 block truncate"
												)}
											>
												{option.name}
											</span>
										</div>
									</Listbox.Option>
								))}
							</Listbox.Options>
						</Transition>
					</div>
				</div>
			)}
		</Listbox>
	);
};

export default Select;
