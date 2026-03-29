import PageBanner from "@/components/PageBanner";

export default function CareersPage() {
  return (
    <div className="bg-white min-h-screen font-sans pb-32">
      <PageBanner
        title="Careers"
        backgroundImage="/software.png" // Using the same reliable placeholder for now
        breadcrumbs={[
          { label: "Home", href: "/power-solutions" },
          { label: "Careers" },
        ]}
      />

      <main className="max-w-4xl mx-auto px-4 md:px-8 mt-16 md:mt-24">
        {/* Form Card Container */}
        <div className="bg-white rounded-xl shadow-[0_5px_30px_rgb(0,0,0,0.08)] border border-gray-50/50 p-8 md:p-14">
          
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-[#005599] font-serif mb-3 tracking-tight">
              Join Our Team
            </h2>
            <p className="text-gray-400 text-sm md:text-base font-medium">
              Send us your cv and we will respond as soon as possible
            </p>
          </div>

          <form className="space-y-6">
            
            {/* Row 1: Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className="w-full bg-[#f4f4f4] text-gray-800 border-none rounded px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#005599] transition-all"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className="w-full bg-[#f4f4f4] text-gray-800 border-none rounded px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#005599] transition-all"
                />
              </div>
            </div>

            {/* Row 2: Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  className="w-full bg-[#f4f4f4] text-gray-800 border-none rounded px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#005599] transition-all"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Phone Number"
                  className="w-full bg-[#f4f4f4] text-gray-800 border-none rounded px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#005599] transition-all"
                />
              </div>
            </div>

            {/* Row 3: Personal Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="dob" className="block text-sm font-semibold text-gray-700 mb-2">
                  Date of birth
                </label>
                <input
                  type="date"
                  id="dob"
                  className="w-full bg-[#f4f4f4] text-gray-500 border-none rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#005599] transition-all"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Address"
                  className="w-full bg-[#f4f4f4] text-gray-800 border-none rounded px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#005599] transition-all"
                />
              </div>
            </div>

            {/* Row 4: Education */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="degree" className="block text-sm font-semibold text-gray-700 mb-2">
                  Educational Degree
                </label>
                <select
                  id="degree"
                  className="w-full bg-[#f4f4f4] text-gray-500 border-none rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#005599] transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_10px] bg-no-repeat bg-[position:right_1rem_center]"
                  defaultValue="Primary School"
                >
                  <option value="Primary School">Primary School</option>
                  <option value="High School">High School</option>
                  <option value="Bachelor">Bachelor&apos;s Degree</option>
                  <option value="Master">Master&apos;s Degree</option>
                  <option value="PhD">PhD</option>
                </select>
              </div>
              <div>
                <label htmlFor="major" className="block text-sm font-semibold text-gray-700 mb-2">
                  Educational Major
                </label>
                <select
                  id="major"
                  className="w-full bg-[#f4f4f4] text-gray-500 border-none rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#005599] transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_10px] bg-no-repeat bg-[position:right_1rem_center]"
                  defaultValue="Accounting"
                >
                  <option value="Accounting">Accounting</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Business">Business</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Row 5: Position */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="school" className="block text-sm font-semibold text-gray-700 mb-2">
                  School/University
                </label>
                <input
                  type="text"
                  id="school"
                  placeholder="School/University"
                  className="w-full bg-[#f4f4f4] text-gray-800 border-none rounded px-4 py-3 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-[#005599] transition-all"
                />
              </div>
              <div>
                <label htmlFor="vacancy" className="block text-sm font-semibold text-gray-700 mb-2">
                  Vacancy
                </label>
                <select
                  id="vacancy"
                  className="w-full bg-[#f4f4f4] text-gray-500 border-none rounded px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#005599] transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:10px_10px] bg-no-repeat bg-[position:right_1rem_center]"
                  defaultValue="Tech. Office Electrical Engineer"
                >
                  <option value="Tech. Office Electrical Engineer">Tech. Office Electrical Engineer</option>
                  <option value="Sales Manager">Sales Manager</option>
                  <option value="Site Engineer">Site Engineer</option>
                  <option value="HR Specialist">HR Specialist</option>
                </select>
              </div>
            </div>

            {/* Row 6: Upload CV */}
            <div className="pt-2">
              <label htmlFor="cv" className="block text-sm font-semibold text-gray-700 mb-2">
                Upload CV
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="file"
                  id="cv"
                  className="block w-full text-sm text-gray-500 border border-gray-300 rounded cursor-pointer file:cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-3 file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 transition-colors"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-[#005599] text-white font-semibold py-4 rounded hover:bg-[#004488] transition-colors focus:ring-4 focus:ring-blue-100"
              >
                Submit
              </button>
            </div>

          </form>
        </div>
      </main>
    </div>
  );
}
