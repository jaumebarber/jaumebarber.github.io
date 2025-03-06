# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "helvetic-resume"
  spec.version       = "1.0.0"
  spec.authors       = ["hipervincle"]
  spec.email         = ["jbarber@hipervincle.com"]

  spec.summary       = %q{A bold typographic theme for Jekyll, inspired by Swiss design.}
  spec.homepage      = "http://jaumebarber.com/helvetic-resume"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^(assets|scripts|_(includes|layouts|sass|locales|pages|posts|data)/|(LICENSE|README)((\.(txt|md|markdown)|$)))}i)
  end


  spec.add_development_dependency "jekyll", "~> 4.4.1"
  spec.add_development_dependency "jekyll-polyglot", "~> 1.9"
  spec.add_development_dependency "jekyll-redirect-from", "~> 0.16.0"
  spec.add_development_dependency "jekyll-date-localization", "~> 0.0.8"
  spec.add_development_dependency "bundler", "~> 2.6.5"
  spec.add_development_dependency "rake", "~> 13.2.1"
end
