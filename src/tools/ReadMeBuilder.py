
from CheckCase import validate_component_cases
from CheckTest import validate_component_tests
from jinja2 import Template, Environment
C_CASE_ERRORS, C_CASE_MAXCOUNT = validate_component_cases(True)
C_TEST_ERRORS, C_TEST_MAXCOUNT = validate_component_tests(True)

def GetPercentageColor(p_percentage: float) -> str:
    return ['green', 'yellow', 'orange', 'red'][(p_percentage != 100) + (p_percentage < 85) + (p_percentage < 75)]

def GetTestErrorBadge() -> str:
    l_percentage = (C_TEST_ERRORS / C_TEST_MAXCOUNT) * 100
    return f'![1](https://img.shields.io/badge/TestErrors-{l_percentage:.0f}%-{GetPercentageColor(l_percentage)}.svg)'

def GetCaseErrorBadge() -> str:
    l_percentage = (C_CASE_ERRORS / C_CASE_MAXCOUNT) * 100
    return f'![1](https://img.shields.io/badge/CaseErrors-{l_percentage:.0f}%-{GetPercentageColor(l_percentage)}.svg)'

def BuildReadMeOnCommit():
    with open('./src/tools/common/ReadMe.md', 'rb') as f:  
        l_readme_as_text = f.read().decode()
    l_jinja_template = Template(l_readme_as_text)

    l_test_results = GetTestErrorBadge() + GetCaseErrorBadge()
    
    t_rendered_text = l_jinja_template.render(p_test_results=l_test_results)

    with open('README.md', 'wb') as f:
        f.write(t_rendered_text.encode())
        

BuildReadMeOnCommit()