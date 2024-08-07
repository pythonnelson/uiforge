<div className="mt-20 flex-grow flex flex-col gap-2 space-y-5 text-[15px]">
        {Links.map((link, index) => {
          const Icon = link.icon;

          return (
            <Link
              key={index}
              href={link.path}
              className={`${
                pathname === link.path
                  ? "bg-[#1d7572] px-4 py-2 font-bold text-white select-none cursor-pointer rounded-lg flex gap-2 w-[75%] items-center border transition-all duration-300 hover:bg-white hover:border-[#1d7572] hover:text-[#1d7572]"
                  : "font-bold hover:text-[#1d7572] select-none cursor-pointer rounded-lg flex gap-2 w-[75%] items-center text-slate-400"
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span>{link.name}</span>
            </Link>
          );
        })}
      </div>
