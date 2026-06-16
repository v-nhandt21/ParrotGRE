.PHONY: install dev build preview open clean help

# Màu sắc terminal
BOLD  := \033[1m
RESET := \033[0m
GREEN := \033[32m
CYAN  := \033[36m
YELLOW:= \033[33m

## Default target
help:
	@echo ""
	@echo "$(BOLD)🦜 ParrotGRE — Lệnh có sẵn$(RESET)"
	@echo "$(CYAN)─────────────────────────────────$(RESET)"
	@echo "  $(GREEN)make install$(RESET)   Cài đặt dependencies (npm install)"
	@echo "  $(GREEN)make dev$(RESET)       Chạy dev server tại http://localhost:5173"
	@echo "  $(GREEN)make build$(RESET)     Build production vào thư mục dist/"
	@echo "  $(GREEN)make preview$(RESET)   Preview bản build production"
	@echo "  $(GREEN)make open$(RESET)      Mở trình duyệt (sau khi dev đang chạy)"
	@echo "  $(GREEN)make clean$(RESET)     Xóa node_modules và dist/"
	@echo "  $(GREEN)make reset$(RESET)     Clean + install lại từ đầu"
	@echo "$(CYAN)─────────────────────────────────$(RESET)"
	@echo ""

## Cài đặt
install:
	@echo "$(YELLOW)📦 Cài đặt dependencies...$(RESET)"
	npm install
	@echo "$(GREEN)✓ Xong. Chạy 'make dev' để bắt đầu.$(RESET)"

## Dev server
dev:
	@echo "$(YELLOW)🚀 Khởi động dev server...$(RESET)"
	@echo "$(CYAN)   → http://localhost:5173$(RESET)"
	npm run dev

## Build production
build:
	@echo "$(YELLOW)🔨 Building production...$(RESET)"
	npm run build
	@echo "$(GREEN)✓ Build xong. Thư mục: dist/$(RESET)"

## Preview build
preview: build
	@echo "$(YELLOW)👁️  Preview production build...$(RESET)"
	@echo "$(CYAN)   → http://localhost:4173$(RESET)"
	npm run preview

## Mở trình duyệt (Linux/WSL)
open:
	@echo "$(YELLOW)🌐 Mở trình duyệt...$(RESET)"
	@xdg-open http://localhost:5173 2>/dev/null || \
	 open http://localhost:5173 2>/dev/null || \
	 echo "$(CYAN)   Mở thủ công: http://localhost:5173$(RESET)"

## Xóa build artifacts
clean:
	@echo "$(YELLOW)🧹 Dọn dẹp...$(RESET)"
	rm -rf node_modules dist
	@echo "$(GREEN)✓ Đã xóa node_modules và dist/$(RESET)"

## Reset hoàn toàn
reset: clean install
	@echo "$(GREEN)✓ Reset xong. Chạy 'make dev' để tiếp tục.$(RESET)"

## Kiểm tra Node version
check:
	@echo "$(CYAN)Node: $(RESET)$$(node --version)"
	@echo "$(CYAN)npm:  $(RESET)$$(npm --version)"
	@node -e "const v=process.version.slice(1).split('.')[0]; if(v<16){console.error('❌ Cần Node >= 16');process.exit(1)}else{console.log('✓ Node version OK')}"
