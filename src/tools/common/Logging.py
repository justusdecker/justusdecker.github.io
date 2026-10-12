C_RESET_COLOR = '\033[0m'
C_RED_BACKGROUND_COLOR = '\033[31m'
C_GREEN_BACKGROUND_COLOR = '\033[31m'

def ErrorLog(p_text: str) -> None:
    print(f'{C_RED_BACKGROUND_COLOR}[ERROR]{p_text}{C_RESET_COLOR}')
    
def SuccessLog(p_text: str) -> None:
    print(f'[SUCCESS]{C_GREEN_BACKGROUND_COLOR}{p_text}{C_RESET_COLOR}')