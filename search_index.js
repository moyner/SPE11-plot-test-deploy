var documenterSearchIndex = {"docs":
[{"location":"pages/sparse_b.html","page":"Sparse B","title":"Sparse B","text":"EditURL = \"../../../scripts/sparse_b.jl\"","category":"page"},{"location":"pages/sparse_b.html","page":"Sparse B","title":"Sparse B","text":"using CSP11Visualizer, Gadfly # hide\nresults = CSP11Visualizer.parse_all_sparse(); # hide\nnothing #hide","category":"page"},{"location":"pages/sparse_b.html#Pressure-in-observation-points","page":"Sparse B","title":"Pressure in observation points","text":"","category":"section"},{"location":"pages/sparse_b.html","page":"Sparse B","title":"Sparse B","text":"set_default_plot_size(30cm, 20cm) # hide\nfunction myplot(k; xlabel = \"Time (years)\", ylabel = \"$k\", title = \"\")\n    Gadfly.plot(results, x=:time, y=k, Geom.line,\n        color = :groupresult,\n        Guide.xlabel(xlabel),\n        Guide.ylabel(ylabel),\n        Guide.title(title)\n    )\nend; # hide\nnothing #hide","category":"page"},{"location":"pages/sparse_b.html#Pressure-observation-points","page":"Sparse B","title":"Pressure observation points","text":"","category":"section"},{"location":"pages/sparse_b.html#Pressure-observation-point-1","page":"Sparse B","title":"Pressure observation point 1","text":"","category":"section"},{"location":"pages/sparse_b.html","page":"Sparse B","title":"Sparse B","text":"We can say something nice about this point.","category":"page"},{"location":"pages/sparse_b.html","page":"Sparse B","title":"Sparse B","text":"myplot(:P1, ylabel = \"Pascal\", title = \"Pressure at P1\") # hide","category":"page"},{"location":"pages/sparse_b.html#Pressure-observation-point-2","page":"Sparse B","title":"Pressure observation point 2","text":"","category":"section"},{"location":"pages/sparse_b.html","page":"Sparse B","title":"Sparse B","text":"We can say something nice about this point, too. We can also do some unrelated math to appear fancy: The Brooks-Corey model is a simple model that can be used to generate relative permeabilities. The model is defined in the mobile region as:","category":"page"},{"location":"pages/sparse_b.html","page":"Sparse B","title":"Sparse B","text":"k_rw = k_maxw barS_w","category":"page"},{"location":"pages/sparse_b.html","page":"Sparse B","title":"Sparse B","text":"k_ro = k_maxo barS_o","category":"page"},{"location":"pages/sparse_b.html","page":"Sparse B","title":"Sparse B","text":"where k_maxw is the maximum relative permeability, barS_w is the normalized saturation for the water phase,","category":"page"},{"location":"pages/sparse_b.html","page":"Sparse B","title":"Sparse B","text":"barS_w = fracS_w - S_wi1 - S_wi - S_ro","category":"page"},{"location":"pages/sparse_b.html","page":"Sparse B","title":"Sparse B","text":"and, similarly, for the oil phase:","category":"page"},{"location":"pages/sparse_b.html","page":"Sparse B","title":"Sparse B","text":"barS_o = fracS_o - S_ro1 - S_wi - S_ro","category":"page"},{"location":"pages/sparse_b.html","page":"Sparse B","title":"Sparse B","text":"myplot(:P2, ylabel = \"Pascal\", title = \"Pressure at P2\") # hide","category":"page"},{"location":"pages/sparse_b.html#Mobile-CO","page":"Sparse B","title":"Mobile CO₂","text":"","category":"section"},{"location":"pages/sparse_b.html#Mobile-CO-in-region-A","page":"Sparse B","title":"Mobile CO₂ in region A","text":"","category":"section"},{"location":"pages/sparse_b.html","page":"Sparse B","title":"Sparse B","text":"myplot(:mobA, ylabel = \"kg\", title = \"Mobile CO2 in region A\") # hide","category":"page"},{"location":"pages/sparse_b.html#Mobile-CO-in-region-B","page":"Sparse B","title":"Mobile CO₂ in region B","text":"","category":"section"},{"location":"pages/sparse_b.html","page":"Sparse B","title":"Sparse B","text":"myplot(:mobB, ylabel = \"kg\", title = \"Mobile CO2 in region A\") # hide","category":"page"},{"location":"pages/sparse_b.html#Dissolved-CO","page":"Sparse B","title":"Dissolved CO₂","text":"","category":"section"},{"location":"pages/sparse_b.html#Dissolved-CO-in-region-A","page":"Sparse B","title":"Dissolved CO₂ in region A","text":"","category":"section"},{"location":"pages/sparse_b.html","page":"Sparse B","title":"Sparse B","text":"myplot(:dissA) # hide","category":"page"},{"location":"pages/sparse_b.html#Dissolved-CO-in-region-B","page":"Sparse B","title":"Dissolved CO₂ in region B","text":"","category":"section"},{"location":"pages/sparse_b.html","page":"Sparse B","title":"Sparse B","text":"myplot(:dissB) # hide","category":"page"},{"location":"pages/sparse_b.html#Immobile-CO","page":"Sparse B","title":"Immobile CO₂","text":"","category":"section"},{"location":"pages/sparse_b.html#Immobile-CO-in-region-A","page":"Sparse B","title":"Immobile CO₂ in region A","text":"","category":"section"},{"location":"pages/sparse_b.html","page":"Sparse B","title":"Sparse B","text":"myplot(:immA) # hide","category":"page"},{"location":"pages/sparse_b.html#Immobile-CO-in-region-B","page":"Sparse B","title":"Immobile CO₂ in region B","text":"","category":"section"},{"location":"pages/sparse_b.html","page":"Sparse B","title":"Sparse B","text":"myplot(:immB) # hide","category":"page"},{"location":"pages/sparse_b.html#CO-in-seal","page":"Sparse B","title":"CO₂ in seal","text":"","category":"section"},{"location":"pages/sparse_b.html#CO-in-seal-in-region-A","page":"Sparse B","title":"CO₂ in seal in region A","text":"","category":"section"},{"location":"pages/sparse_b.html","page":"Sparse B","title":"Sparse B","text":"myplot(:sealA) # hide","category":"page"},{"location":"pages/sparse_b.html#CO-in-seal-in-region-B","page":"Sparse B","title":"CO₂ in seal in region B","text":"","category":"section"},{"location":"pages/sparse_b.html","page":"Sparse B","title":"Sparse B","text":"myplot(:sealB) # hide","category":"page"},{"location":"pages/sparse_b.html#CO-in-bound","page":"Sparse B","title":"CO₂ in bound","text":"","category":"section"},{"location":"pages/sparse_b.html#CO-in-bound-in-total","page":"Sparse B","title":"CO₂ in bound in total","text":"","category":"section"},{"location":"pages/sparse_b.html","page":"Sparse B","title":"Sparse B","text":"myplot(:boundTot) # hide","category":"page"},{"location":"pages/sparse_b.html#CO-in-seal-2","page":"Sparse B","title":"CO₂ in seal","text":"","category":"section"},{"location":"pages/sparse_b.html","page":"Sparse B","title":"Sparse B","text":"myplot(:sealTot) # hide","category":"page"},{"location":"pages/sparse_b.html","page":"Sparse B","title":"Sparse B","text":"","category":"page"},{"location":"pages/sparse_b.html","page":"Sparse B","title":"Sparse B","text":"This page was generated using Literate.jl.","category":"page"},{"location":"animation_b_example.html#Animation-example","page":"Animation example","title":"Animation example","text":"","category":"section"},{"location":"animation_b_example.html","page":"Animation example","title":"Animation example","text":"We can generate animations from any of the data and embed in the static webpage.","category":"page"},{"location":"animation_b_example.html","page":"Animation example","title":"Animation example","text":"Will probably be a big website...","category":"page"},{"location":"animation_b_example.html","page":"Animation example","title":"Animation example","text":"using CSP11Visualizer  # hide\nresults = CSP11Visualizer.parse_dense_timesteps(\"sintef\", 1) # hide\nCSP11Visualizer.make_movie(results, \"gas_saturation\", \"Gas saturation\", filename = \"sg.mp4\") # hide","category":"page"},{"location":"animation_b_example.html#Gas-saturation-for-one-result","page":"Animation example","title":"Gas saturation for one result","text":"","category":"section"},{"location":"animation_b_example.html","page":"Animation example","title":"Animation example","text":"<video autoplay loop muted playsinline controls src=\"./sg.mp4\" />","category":"page"},{"location":"pages/dense_b_example.html","page":"Dense B snapshot example","title":"Dense B snapshot example","text":"EditURL = \"../../../scripts/dense_b_example.jl\"","category":"page"},{"location":"pages/dense_b_example.html","page":"Dense B snapshot example","title":"Dense B snapshot example","text":"Example of visualizing dense values","category":"page"},{"location":"pages/dense_b_example.html","page":"Dense B snapshot example","title":"Dense B snapshot example","text":"using CSP11Visualizer, GLMakie # hide\nsteps = 0:5:50\nsteps = 0:5:1000\nsteps = [50, 1000]\nresults = CSP11Visualizer.parse_dense_timesteps(\"sintef\", 1, steps = steps); # hide\nend_of_injection = findfirst(isequal(50), steps)\n@assert !isnothing(end_of_injection)\nend_of_migration = findfirst(isequal(1000), steps)\n@assert !isnothing(end_of_migration)","category":"page"},{"location":"pages/dense_b_example.html#Pressure","page":"Dense B snapshot example","title":"Pressure","text":"","category":"section"},{"location":"pages/dense_b_example.html#End-of-injection","page":"Dense B snapshot example","title":"End of injection","text":"","category":"section"},{"location":"pages/dense_b_example.html","page":"Dense B snapshot example","title":"Dense B snapshot example","text":"CSP11Visualizer.plot_snapshot(results[end_of_injection], \"pressure_Pa\", \"Pressure (Pascal)\") # hide","category":"page"},{"location":"pages/dense_b_example.html#End-of-migration","page":"Dense B snapshot example","title":"End of migration","text":"","category":"section"},{"location":"pages/dense_b_example.html","page":"Dense B snapshot example","title":"Dense B snapshot example","text":"CSP11Visualizer.plot_snapshot(results[end_of_migration], \"pressure_Pa\", \"Pressure (Pascal)\") # hide","category":"page"},{"location":"pages/dense_b_example.html#Gas-saturation","page":"Dense B snapshot example","title":"Gas saturation","text":"","category":"section"},{"location":"pages/dense_b_example.html#End-of-injection-2","page":"Dense B snapshot example","title":"End of injection","text":"","category":"section"},{"location":"pages/dense_b_example.html","page":"Dense B snapshot example","title":"Dense B snapshot example","text":"CSP11Visualizer.plot_snapshot(results[end_of_injection], \"gas_saturation\", \"Gas saturation\") # hide","category":"page"},{"location":"pages/dense_b_example.html#End-of-migration-2","page":"Dense B snapshot example","title":"End of migration","text":"","category":"section"},{"location":"pages/dense_b_example.html","page":"Dense B snapshot example","title":"Dense B snapshot example","text":"CSP11Visualizer.plot_snapshot(results[end_of_migration], \"gas_saturation\", \"Gas saturation\") # hide","category":"page"},{"location":"pages/dense_b_example.html#CO-mass-fraction-in-liquid","page":"Dense B snapshot example","title":"CO₂ mass fraction in liquid","text":"","category":"section"},{"location":"pages/dense_b_example.html#End-of-injection-3","page":"Dense B snapshot example","title":"End of injection","text":"","category":"section"},{"location":"pages/dense_b_example.html","page":"Dense B snapshot example","title":"Dense B snapshot example","text":"CSP11Visualizer.plot_snapshot(results[end_of_injection], \"mass_fraction_of_CO2_in_liquid\", \"CO₂ mass fraction in liquid\") # hide","category":"page"},{"location":"pages/dense_b_example.html#End-of-migration-3","page":"Dense B snapshot example","title":"End of migration","text":"","category":"section"},{"location":"pages/dense_b_example.html","page":"Dense B snapshot example","title":"Dense B snapshot example","text":"CSP11Visualizer.plot_snapshot(results[end_of_migration], \"mass_fraction_of_CO2_in_liquid\", \"CO₂ mass fraction in liquid\") # hide","category":"page"},{"location":"pages/dense_b_example.html#HO-mass-fraction-in-vapor","page":"Dense B snapshot example","title":"H₂O mass fraction in vapor","text":"","category":"section"},{"location":"pages/dense_b_example.html#End-of-injection-4","page":"Dense B snapshot example","title":"End of injection","text":"","category":"section"},{"location":"pages/dense_b_example.html","page":"Dense B snapshot example","title":"Dense B snapshot example","text":"CSP11Visualizer.plot_snapshot(results[end_of_injection], \"mass_fraction_of_H20_in_vapor\", \"H₂O mass fraction in vapor\") # hide","category":"page"},{"location":"pages/dense_b_example.html#End-of-migration-4","page":"Dense B snapshot example","title":"End of migration","text":"","category":"section"},{"location":"pages/dense_b_example.html","page":"Dense B snapshot example","title":"Dense B snapshot example","text":"CSP11Visualizer.plot_snapshot(results[end_of_migration], \"mass_fraction_of_H20_in_vapor\", \"H₂O mass fraction in vapor\") # hide","category":"page"},{"location":"pages/dense_b_example.html#Gas-density","page":"Dense B snapshot example","title":"Gas density","text":"","category":"section"},{"location":"pages/dense_b_example.html#End-of-injection-5","page":"Dense B snapshot example","title":"End of injection","text":"","category":"section"},{"location":"pages/dense_b_example.html","page":"Dense B snapshot example","title":"Dense B snapshot example","text":"CSP11Visualizer.plot_snapshot(results[end_of_injection], \"phase_mass_density_gas_kg_m3\", \"Gas density (kg/m³)\") # hide","category":"page"},{"location":"pages/dense_b_example.html#End-of-migration-5","page":"Dense B snapshot example","title":"End of migration","text":"","category":"section"},{"location":"pages/dense_b_example.html","page":"Dense B snapshot example","title":"Dense B snapshot example","text":"CSP11Visualizer.plot_snapshot(results[end_of_migration], \"phase_mass_density_gas_kg_m3\", \"Gas density (kg/m³)\") # hide","category":"page"},{"location":"pages/dense_b_example.html#Water-density","page":"Dense B snapshot example","title":"Water density","text":"","category":"section"},{"location":"pages/dense_b_example.html#End-of-injection-6","page":"Dense B snapshot example","title":"End of injection","text":"","category":"section"},{"location":"pages/dense_b_example.html","page":"Dense B snapshot example","title":"Dense B snapshot example","text":"CSP11Visualizer.plot_snapshot(results[end_of_injection], \"phase_mass_density_water_kg_m3\", \"Water density (kg/m³)\") # hide","category":"page"},{"location":"pages/dense_b_example.html#End-of-migration-6","page":"Dense B snapshot example","title":"End of migration","text":"","category":"section"},{"location":"pages/dense_b_example.html","page":"Dense B snapshot example","title":"Dense B snapshot example","text":"CSP11Visualizer.plot_snapshot(results[end_of_migration], \"phase_mass_density_water_kg_m3\", \"Water density (kg/m³)\") # hide","category":"page"},{"location":"pages/dense_b_example.html#Total-mass-of-CO","page":"Dense B snapshot example","title":"Total mass of CO₂","text":"","category":"section"},{"location":"pages/dense_b_example.html#End-of-injection-7","page":"Dense B snapshot example","title":"End of injection","text":"","category":"section"},{"location":"pages/dense_b_example.html","page":"Dense B snapshot example","title":"Dense B snapshot example","text":"CSP11Visualizer.plot_snapshot(results[end_of_injection], \"total_mass_CO2_kg\", \"Total mass of CO₂ (kg)\") # hide","category":"page"},{"location":"pages/dense_b_example.html#End-of-migration-7","page":"Dense B snapshot example","title":"End of migration","text":"","category":"section"},{"location":"pages/dense_b_example.html","page":"Dense B snapshot example","title":"Dense B snapshot example","text":"CSP11Visualizer.plot_snapshot(results[end_of_migration], \"total_mass_CO2_kg\", \"Total mass of CO₂ (kg)\") # hide","category":"page"},{"location":"pages/dense_b_example.html#Temperature","page":"Dense B snapshot example","title":"Temperature","text":"","category":"section"},{"location":"pages/dense_b_example.html#End-of-injection-8","page":"Dense B snapshot example","title":"End of injection","text":"","category":"section"},{"location":"pages/dense_b_example.html","page":"Dense B snapshot example","title":"Dense B snapshot example","text":"CSP11Visualizer.plot_snapshot(results[end_of_injection], \"temperature_C\", \"Temperature (°C)\") # hide","category":"page"},{"location":"pages/dense_b_example.html#End-of-migration-8","page":"Dense B snapshot example","title":"End of migration","text":"","category":"section"},{"location":"pages/dense_b_example.html","page":"Dense B snapshot example","title":"Dense B snapshot example","text":"CSP11Visualizer.plot_snapshot(results[end_of_migration], \"temperature_C\", \"Temperature (°C)\") # hide","category":"page"},{"location":"pages/dense_b_example.html","page":"Dense B snapshot example","title":"Dense B snapshot example","text":"","category":"page"},{"location":"pages/dense_b_example.html","page":"Dense B snapshot example","title":"Dense B snapshot example","text":"This page was generated using Literate.jl.","category":"page"},{"location":"index.html#SPE11-plots","page":"Home","title":"SPE11 plots","text":"","category":"section"},{"location":"index.html","page":"Home","title":"Home","text":"Experiment in making SPE11 data accessible using a Documenter.jl + Gadfly.jl + Makie.jl workflow. Check sidebar for examples.","category":"page"},{"location":"index.html","page":"Home","title":"Home","text":"danger: Just a test\nThis are not official or final results.","category":"page"}]
}
